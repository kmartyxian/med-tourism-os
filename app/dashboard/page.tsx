export default function DashboardPage() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Dashboard</h1>
      <p style={{ marginBottom: 24 }}>
        Welcome. This will become the agency control center.
      </p>

      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <a
          href="/dashboard/packages"
          style={{
            padding: 16,
            border: "1px solid #333",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          <div style={{ fontWeight: 700 }}>Packages</div>
          <div style={{ opacity: 0.8 }}>Build & publish patient packages</div>
        </a>

        <a
          href="/dashboard/patients"
          style={{
            padding: 16,
            border: "1px solid #333",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          <div style={{ fontWeight: 700 }}>Patients</div>
          <div style={{ opacity: 0.8 }}>Track journeys and documents</div>
        </a>

        <a
          href="/dashboard/settings"
          style={{
            padding: 16,
            border: "1px solid #333",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          <div style={{ fontWeight: 700 }}>Settings</div>
          <div style={{ opacity: 0.8 }}>Agency profile and team</div>
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <div style={{ border: "1px solid #333", borderRadius: 10, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Recent Activity</h2>
          <ul>
            <li>(placeholder) Package created</li>
            <li>(placeholder) Patient added</li>
            <li>(placeholder) Message received</li>
          </ul>
        </div>

        <div style={{ border: "1px solid #333", borderRadius: 10, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Next Step</h2>
          <p style={{ marginBottom: 8 }}>
            1) Add Supabase login
            <br />
            2) Protect dashboard
            <br />
            3) Create first Package Builder screen
          </p>
        </div>
      </div>
    </div>
  );
}