<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Web Clone</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js"></script>
    <link rel="stylesheet" href="../public/style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-md-4 col-lg-3 sidebar">
                <div class="sidebar-header">
                    <h3>WhatsApp</h3>
                </div>
                <div class="chat-header">
                    <input type="text" class="form-control" placeholder="Search or start new chat">
                </div>
                <ul class="chat-list">
                    
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/100" alt="Contact">
                            <div class="ml-2">Social Media Master</div>
                        </div>
                        <small>1:09 AM</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/200" alt="Contact">
                            <div class="ml-2">Pesto Tech</div>
                        </div>
                        <small>Yesterday</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/300" alt="Contact">
                            <div class="ml-2">Yash Maheshwari</div>
                        </div>
                        <small>Yesterday</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/400" alt="Contact">
                            <div class="ml-2">Mohit</div>
                        </div>
                        <small>Yesterday</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/500" alt="Contact">
                            <div class="ml-2">My family</div>
                        </div>
                        <small>Yesterday</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/600" alt="Contact">
                            <div class="ml-2">+91 95499 33325</div>
                        </div>
                        <small>7/27/2024</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/700" alt="Contact">
                            <div class="ml-2">Yash Mashwary</div>
                        </div>
                        <small>Yesterday</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/800" alt="Contact">
                            <div class="ml-2">गंगापुर ई मित्र ब्यावर</div>
                        </div>
                        <small>Yesterday</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/900" alt="Contact">
                            <div class="ml-2">+91 79736 54544</div>
                        </div>
                        <small>7/27/2024</small>
                    </li>
                    <li class="chat-list-item">
                        <div class="contact-info justify-content-center align-items-center d-flex">
                            <img src="https://picsum.photos/1000" alt="Contact">
                            <div class="ml-2">Ritik</div>
                        </div>
                        <small>7/27/2024</small>
                    </li>
                </ul>
            </div>
            <div class="col-md-8 col-lg-9 chat-main">
                <div class="chat-header d-flex justify-content-between align-items-center">
                    <div class="contact-info d-flex">
                        <img src="https://picsum.photos/100" alt="Contact">
                        <div class="ml-1">
                            <span>Social Media Master</span> <br>
                            <small class="online-status">online</small>
                        </div>
                    </div>
                    <div class="chat-header-icons d-flex mr-5">
                        <i class="fas fa-video"></i>
                        <i class="fas fa-phone"></i>
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div class="chat-body">
                    <div class="message received">
                        <p class="message-text">node:20468 [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated
                            option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed
                            in the next major version
                            (Use `node --trace-warnings ...` to show where the warning was created)
                            (node:20468) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option:
                            useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in
                            the next major version
                            Server running on port 5000
                            Connected to MongoDB</p>
                        <i class="fas fa-solid fa-check-double float-right ml-2 mt-2"></i>
                        <small class="message-time float-right ml-2 mt-2">12:20 PM</small>
                    </div>
                    <br>
                    <div class="message sent">
                        <p class="message-text">node:20468 [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated
                            option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed
                            in the next major version
                            (Use `node --trace-warnings ...` to show where the warning was created)
                            (node:20468) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option:
                            useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in
                            the next major version
                            Server running on port 5000
                            Connected to MongoDB</p>
                        <i class="fas fa-solid fa-check-double float-right ml-2 mt-2"></i>
                        <small class="message-time float-right ml-2 mt-2">12:20 PM</small>
                    </div>
                    <div class="message received">
                        <p class="message-text">OK</p>
                        <i class="fas fa-solid fa-check-double float-right ml-2 mt-2"></i>
                        <small class="message-time float-right ml-2 mt-2">12:20 PM</small>
                    </div>
                    <div class="message sent">
                        <p class="message-text">Soul AI</p>
                        <i class="fas fa-solid fa-check-double float-right ml-2 mt-2"></i>
                        <small class="message-time float-right ml-2 mt-2">12:20 PM</small>
                    </div>
                    <div class="message sent">
                        <a
                            href="https://app.soulhq.ai/?campus=JavaScript-LinkedIn">https://app.soulhq.ai/?campus=JavaScript-LinkedIn</a>
                        <i class="fas fa-solid fa-check-double float-right ml-2 mt-2"></i>
                        <small class="message-time float-right ml-2 mt-2">12:20 PM</small>
                    </div>
                </div>
                <div class="chat-footer d-flex align-items-center justify-content-between btn-style-send">
                    <i class="fas fa-smile mr-3"></i>
                    <i class="fas fa-paperclip mr-3"></i>
                    <i class="fas fa-microphone mr-3"></i>
                    <input type="text" placeholder="Type a message">
                    <button type="button" class="btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>