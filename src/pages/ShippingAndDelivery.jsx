import React from "react";

function ShippingAndDelivery() {
  return (
    <div
      style={{
        // background: "black",
        // color: "white",
        padding: "1rem",
        marginTop: "5rem",
        minHeight: "70vh",
      }}
    >
      <h1>Shipping and Delivery Policy</h1>
      <p>
        <strong>Effective Date:</strong> December 31, 2024
      </p>
      <p>
        At <strong>mkrishna.tech</strong>, we offer{" "}
        <strong>online classes</strong>,<strong> technical consulting</strong>,
        and <strong>software development</strong>
        services. We do not deliver any physical goods.
      </p>

      <h2>1. Digital Delivery of Services</h2>
      <p>
        Our Services are delivered via online communication platforms, email, or
        other digital means. Any deliverables (e.g., code repositories, design
        files) will be shared electronically.
      </p>

      <h2>2. Order Processing and Access</h2>
      <p>
        Once payment is confirmed, you will receive the necessary instructions
        or access links (e.g., to online classes or project documentation).
      </p>

      <h2>3. No Physical Shipping</h2>
      <p>
        Since no physical products are shipped,{" "}
        <strong>no shipping fees</strong> apply. No international shipping
        policies are needed for intangible, digital deliveries.
      </p>

      <h2>4. Contact Information</h2>
      <p>
        If you have any questions regarding the delivery of digital services,
        please reach us at:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:krishna@mkrishna.tech">krishna@mkrishna.tech</a>
        </li>
        <li>
          <strong>Address:</strong> We operate entirely online as a remote-based
          service provider and do not maintain a fixed physical office location.
          For any official correspondence or legal notices, please contact us
          via email at{" "}
          <a href="mailto:krishna@mkrishna.tech">krishna@mkrishna.tech</a>. If a
          physical address is required for specific legal or regulatory reasons,
          please reach out to us at the same email address, and we will provide
          the appropriate mailing address as necessary.
        </li>
      </ul>

      <h2>5. Policy Updates</h2>
      <p>
        We may update this Shipping and Delivery Policy from time to time. Any
        changes will be posted on this page with the new effective date.
      </p>
    </div>
  );
}

export default ShippingAndDelivery;
