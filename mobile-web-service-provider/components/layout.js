export default function Layout({ children }) {
  return (
    <>
      <div className="text-white">
        {children}
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span></span>
          </a>
        </footer>
      </div>
    </>
  );
}
