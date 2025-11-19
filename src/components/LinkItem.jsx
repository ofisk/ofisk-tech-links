function LinkItem({ label, url, summary }) {
  return (
    <li className="link-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="link-label">{label}</span>
        {summary && <p className="link-summary">{summary}</p>}
      </a>
    </li>
  )
}

export default LinkItem

