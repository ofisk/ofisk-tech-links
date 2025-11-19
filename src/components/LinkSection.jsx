import LinkItem from './LinkItem'

function LinkSection({ title, links }) {
  return (
    <div className="link-section">
      <h3 className="link-section-title">{title}</h3>
      <ul className="links-list">
        {links.map((link, index) => (
          <LinkItem 
            key={index} 
            label={link.label} 
            url={link.url} 
            summary={link.summary}
          />
        ))}
      </ul>
    </div>
  )
}

export default LinkSection

