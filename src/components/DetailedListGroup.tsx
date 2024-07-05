import logo from "../assets/smiley.png";

const DetailedListGroup = () => {
  return (
    <>
      <div className=" flex-column flex-md-row p-4 gap-4 py-md-5">
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src={logo}
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Organization - Hours</h6>
                <p className="mb-0 opacity-75">Next event: MM/DD/YYYY</p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src={logo}
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">CoderDojo Redondo Beach - 30</h6>
                <p className="mb-0 opacity-75">Next event: 7/27/2024</p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src={logo}
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Coder Dojo Fullerton - 31</h6>
                <p className="mb-0 opacity-75">Next event: 7/11/2024</p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src={logo}
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">GoodHandsFor1 - 50</h6>
                <p className="mb-0 opacity-75">Next event: 7/6/2024</p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default DetailedListGroup;
