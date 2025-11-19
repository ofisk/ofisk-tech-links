function LinkItem({ label, url }) {
  return (
    <li className="link-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </li>
  )
}

export default LinkItem

