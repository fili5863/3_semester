export default function Hero() {
  return (
    <section className="heroContainer">
      <div className="heroObj">
        <div className="heroText">
          <h1>
            Blockchain finally made <span>accessible|</span>
          </h1>
          <p>
            Unleash the potential of blockchain to making your business secure, scalable, and
            accessible.
          </p>
          <button>
            Get started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-compact-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
              />
            </svg>
          </button>
        </div>
        <div className="heroGraphics"></div>
      </div>
    </section>
  );
}
