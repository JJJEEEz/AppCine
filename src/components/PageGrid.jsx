function PageGrid({ title, subtitle, children }) {
  return (
    <main className="page-wrapper">
      {title ? (
        <header className="page-wrapper__header">
          <h2 className="page-wrapper__title">{title}</h2>
          {subtitle ? (
            <p className="page-wrapper__subtitle">{subtitle}</p>
          ) : null}
        </header>
      ) : null}
      <section className="page-grid">{children}</section>
    </main>
  )
}

export default PageGrid
