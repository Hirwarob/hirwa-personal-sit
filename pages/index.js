export default function Home() {
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1>Hirwa Robert Christian</h1>
        <p>Nurse | Digital Health Advocate | EDPU Africa</p>
      </header>

      <section>
        <h2>About Me / Ibyanjye</h2>
        <p>I’m a passionate nurse with six years of experience working in healthcare settings. Currently, I serve at EDPU Africa, screening for non-communicable diseases and promoting digital health innovation. Based in Gicumbi, Rwanda, I thrive on collaboration, learning, and delivering quality care.</p>
        <p><em>Ndi umuforomo w’inararibonye ufite imyaka itandatu akora mu rwego rw’ubuzima. Ubu nkorera EDPU Africa, aho dukora isuzuma ry’indwara zitandura no guteza imbere ikoranabuhanga mu buvuzi. Nkora mu karere ka Gicumbi, nkunda gukorana n’abandi, kwiga ibishya no gutanga serivisi nziza.</em></p>
      </section>

      <section>
        <h2>What I Do / Ibikorwa Byanjye</h2>
        <ul>
          <li><strong>NCD Screening / Gupima Indwara Zitandura:</strong> Providing community-based screening for non-communicable diseases. <em>Gutanga serivisi zo gupima indwara zitandura mu baturage.</em></li>
          <li><strong>Health Education / Gutoza ku Buzima:</strong> Educating clients about prevention, wellness, and digital tools for health. <em>Gutanga ubumenyi ku kwirinda, kugira ubuzima bwiza n'ikoranabuhanga mu buvuzi.</em></li>
          <li><strong>Documentation / Kwandika Amakuru:</strong> Filling RSSB forms and maintaining accurate patient data. <em>Kuzuza inyandiko za RSSB no kubika amakuru nyayo y’abarwayi.</em></li>
        </ul>
      </section>

      <section>
        <h2>Contact Me / Uburyo Wambona</h2>
        <p>Email: hirwachristian@example.com</p>
        <p>Phone: +250 78X XXX XXX</p>
      </section>

      <footer style={{ marginTop: 40, fontSize: 12, textAlign: 'center', color: '#888' }}>
        &copy; {new Date().getFullYear()} Hirwa Robert Christian. All rights reserved.
      </footer>
    </div>
  )
}
