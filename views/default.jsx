const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/style.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer>
                <div className='sticky-lg-bottom'>
                    <p className='text-primary fs-1'>Created By Anthony Ghilardi</p>
                </div>
            </footer>
        </html>
    )
}

module.exports = Def