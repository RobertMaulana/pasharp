import React from 'react'
import PropTypes from 'prop-types'

const Navigation = ({components}) => {
  return (
    <ul className='navigation'>
      {
        components.map((name, index) => {
          return (
            <ul key={index}>
              <li key={name}>
                <a href={`#${name}`}>{name.match(/[A-Z][a-z]+|[0-9]+/g).join(' ')}</a>
              </li>
            </ul>
          )
        })
      }
    </ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
}

export default Navigation
