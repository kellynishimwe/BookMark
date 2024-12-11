import PropTypes from 'prop-types'

const Heading = ({className,content}) => {
  return (
    <h1  className={className}>{content}</h1>
  )
}

export default Heading



Heading.propTypes  = {
  content: PropTypes.string.isRequired,
  className:  PropTypes.string  
}