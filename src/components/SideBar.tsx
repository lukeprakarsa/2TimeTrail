import house from "../assets/house-door.svg";
import logo from "../assets/smiley.png";

const SideBar = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link link-body-emphasis active"
              aria-current="page"
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#house-door"></use></svg> */}
              <img
                className="bi pe-none me-2"
                src={house}
                width="16"
                height="16"
              />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
              Hours Log
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown mt-auto">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={logo}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>LukeP</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
