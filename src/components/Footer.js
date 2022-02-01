const CustomFooter = () => {
  return (
    <div style={{ marginTop: "10px", paddingTop: "120px" }}>
      <footer class="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a
            style={{ textDecoration: "none" }}
            className="text-dark"
            href="https://instagram.com/lukescheller_gd/"
          >
            &nbsp;LSGD - <a href="http://www.github.com/lukescheller">GitHub</a>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;
