import React,{Fragment} from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to='/'>
                            <img src="" alt="icon"/>
                        </Link>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
