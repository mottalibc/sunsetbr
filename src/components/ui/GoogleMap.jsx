"use client";

export default function GoogleMap() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Find Us</h3>
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.6825537189516!2d92.04588611110364!3d21.284029780348277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc50016989405%3A0xed9b57a7152b266e!2sSunset%20Beach%20Resort!5e0!3m2!1sen!2sbd!4v1749979700919!5m2!1sen!2sbd"
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sunset Beach Resort Location"
        ></iframe>
      </div>
    </div>
  );
}
