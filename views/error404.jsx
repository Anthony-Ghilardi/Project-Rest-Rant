const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg" alt="Cat" style={{ width: '50%' }}></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@madhatterzone">Manja Vitolic</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404