import React from "react";
import Button from "../components/Button";
import PageHeading from "../components/PageHeading";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const ButtonPage = () => {
  return (
    <>
      <PageHeading>Buttons</PageHeading>

      <h3>Varient</h3>
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Button /&gt;</code>
          </p>
          <Button />
        </div>

        <div className="box">
          <p>
            <code>&lt;Button variant="outline" /&gt;</code>
          </p>
          <Button variant="outline" />
        </div>

        <div className="box">
          <p>
            <code>&lt;Button variant="text" /&gt;</code>
          </p>
          <Button variant="text" />
        </div>

        <div className="box">
          <p>
            <code>&lt;Button disableShadow /&gt;</code>
          </p>
          <Button color="primary" disableShadow />
        </div>
      </div>

      <h3>Disabled</h3>
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Button /&gt;</code>
          </p>
          <Button disabled>Disabled</Button>
        </div>

        <div className="box">
          <p>
            <code>&lt;Button variant="outline" /&gt;</code>
          </p>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </div>

        <div className="box">
          <p>
            <code>&lt;Button variant="text" /&gt;</code>
          </p>
          <Button variant="text" disabled>
            Disabled
          </Button>
        </div>

        <div className="box">
          <p>
            <code>&lt;Button disableShadow /&gt;</code>
          </p>
          <Button color="primary" disableShadow disabled>
            Disabled
          </Button>
        </div>
      </div>

      <h3>Button with Icon</h3>
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>
              &lt;Button startIcon=&#123;&lt;MdOutlineLocalGroceryStore
              /&gt;&#125; /&gt;
            </code>
          </p>
          <Button color="primary" startIcon={<MdOutlineLocalGroceryStore />} />
        </div>

        <div className="box">
          <p>
            <code>
              &lt;Button endIcon=&#123;&lt;MdOutlineLocalGroceryStore
              /&gt;&#125; /&gt;
            </code>
          </p>
          <Button color="primary" endIcon={<MdOutlineLocalGroceryStore />} />
        </div>
      </div>

      <h3>Size</h3>
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Button size="sm"/&gt;</code>
          </p>
          <Button color="primary" size="sm" />
        </div>
        <div className="box">
          <p>
            <code>&lt;Button size="md"/&gt;</code>
          </p>
          <Button color="primary" size="md" />
        </div>
        <div className="box">
          <p>
            <code>&lt;Button size="lg"/&gt;</code>
          </p>
          <Button color="primary" size="lg" />
        </div>
      </div>

      <h3>Color</h3>
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Button color="default"/&gt;</code>
          </p>
          <Button color="default" size="sm" />
        </div>
        <div className="box">
          <p>
            <code>&lt;Button color="primary"/&gt;</code>
          </p>
          <Button color="primary">Primary</Button>
        </div>
        <div className="box">
          <p>
            <code>&lt;Button color="secondary"/&gt;</code>
          </p>
          <Button color="secondary">Secondary</Button>
        </div>
        <div className="box">
          <p>
            <code>&lt;Button color="danger"/&gt;</code>
          </p>
          <Button color="danger">Danger</Button>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
