require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/userModel');
const userRoutes = require('./routes/userRoutes.js');
const session = require('express-session');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err.message);
});

let usp = io.of('/users-dashboard');
usp.on('connection', async (socket) => {
    console.log('A user connected');
    
    // Handle chat messages
    socket.on('chatMessage', (msg) => {
        usp.emit('chatMessage', msg);
    });

    // Update user status
    socket.broadcast.emit('users_status_online', { user_id: socket.handshake.auth.token });
    await User.findByIdAndUpdate(socket.handshake.auth.token, {
        $set: { is_online: true }
    });

    socket.on('disconnect', async () => {
        console.log('User disconnected');
        socket.broadcast.emit('users_status_offline', { user_id: socket.handshake.auth.token });
        await User.findByIdAndUpdate(socket.handshake.auth.token, {
            $set: { is_online: false }
        });
    });
});

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', userRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
