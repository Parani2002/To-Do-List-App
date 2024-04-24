import React from 'react'

const Header = (props) => {
  return (
    <header>
        {props.title}
    </header>
  )
}
Header.defaultProps = {
  title : "Paranitharan"
}

export default Header;