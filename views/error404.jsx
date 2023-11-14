const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="https://http.cat/404"/>
                <div>
                    Image from <a href="https://http.cat/status/404">Http cats</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404;