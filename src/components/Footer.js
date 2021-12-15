import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import udanaLogoVer from "./udanaLogoVertical.png";
import kominfo from "./kominfo.png";
import pse from "./pse.png";
import aludi from "./aludi.png";
import iso from "./cbqa.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items-logo">
              <img src={udanaLogoVer} alt="udana" />
              <p>PT. Dana Rintis Indonesia</p>
            </div>
            <div class="footer-link-items-alamat">
              <h2>
                PT. Dana Rintis Indonesia Jl. KH. Hasyim Ashari No.17, Petojo
                Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus
                Ibukota Jakarta, 10130 E: support@udana.id W: 087709999430
              </h2>
            </div>
            <div class="footer-link-items">
              <h2>Perusahaan</h2>
              <Link to="/">Tentang</Link>
              <Link to="/">Hubungi Kami</Link>
              <Link to="/">Syarat & Ketentuan</Link>
              <Link to="/">Kebijakan Privasi</Link>
            </div>
            <div class="footer-link-items">
              <h2>Investor</h2>
              <Link to="/">FAQ</Link>
              <Link to="/">Resiko Investasi</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Videos</h2>
              <div class="social-icons">
                <div className="instagram">
                  <a
                    class="social-icon-link instagram"
                    href="https://www.instagram.com/udanainaja/"
                  >
                    <i class="fab fa-instagram-square" />
                  </a>
                </div>

                <div className="linkedin">
                  <a
                    class="social-icon-link linkedin"
                    href="https://www.linkedin.com/company/udana-id/"
                  >
                    <i class="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div class="footer-link-items">
              <h2>Didukung Oleh</h2>
              <section class="social-media">
                <div class="social-media-wrap">
                  <div class="social-icons">
                    <div className="kominfo">
                      <a
                        class="social-icon-link kominfo"
                        href="https://pse.kominfo.go.id/tdpse-detail/1425"
                      >
                        <img src={kominfo} alt="kominfo" />
                      </a>
                    </div>
                    <div className="pse">
                      <a
                        class="social-icon-link pse"
                        href="https://pse.kominfo.go.id/tdpse-detail/1677"
                      >
                        <img src={pse} alt="pse" />
                      </a>
                    </div>
                    <div className="aludi">
                      <a
                        class="social-icon-link aludi"
                        href="https://aludi.id/"
                      >
                        <img src={aludi} alt="aludi" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="social-media-wrap">
                  <div class="social-icons">
                    <div id="iso">
                      <a
                        class="social-icon-link cbqa"
                        href="https://www.cbqaglobal.com/validation/company/pt-dana-rintis-indonesia/?cred_referrer_form_id=58"
                      >
                        <img src={iso} alt="iso" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container2">
        <p>
          PT DANA RINTIS INDONESIA merupakan perusahaan berbadan hukum yang
          didirikan berdasarkan Hukum Republik Indonesia. Berdiri sebagai
          perusahaan yang masih dalam proses pendaftaran oleh Otoritas Jasa
          Keuangan (OJK) di Indonesia. Perusahaan menyediakan layanan antar muka
          (interface) sebagai penghubung pihak yang memberikan pendanaan dan
          pihak yang membutuhkan pendanaan meliputi pendanaan dari individu,
          organisasi, maupun badan hukum kepada individu atau badan hukum
          tertentu. Perusahaan tidak menyediakan segala bentuk saran atau
          rekomendasi pendanaan terkait pilihan-pilihan dalam situs ini. Isi dan
          materi yang tersedia pada situs Udana.id dimaksudkan untuk memberikan
          informasi dan tidak dianggap sebagai sebuah penawaran, permohonan,
          undangan, saran, maupun rekomendasi untuk pendanaan sekuritas, produk
          pasar modal, atau jasa keuangan lainya. Perusahaan dalam memberikan
          jasanya hanya terbatas pada fungsi administratif. Perusahaan tidak
          memberikan saran, memberi kewajiban atau kewajiban lainya untuk
          jasanya.
        </p>
        <p>
          Udana adalah platform urun dana bisnis yang hadir untuk membuka akses
          pendanaan dan investasi bagi semua kalangan berbasis teknologi
          informasi (equity crowdfunding) dimana pebisnis menawarkan saham
          bisnis kepada calon investor baik itu individu maupun organisasi:
        </p>
        <p>
          Penggunaan Udana diatur sesuai dengan Peraturan Otoritas Jasa Keuangan
          No. 37 Tahun 2018 Pasal 23 tentang Layanan Urun Dana melalui Penawaran
          Saham Berbasis Teknologi Informasi atau Equity Crowdfunding (“POJK
          37/2018”).
        </p>
        <p>Dengan digunakannya layanan ini, kami menyatakan bahwa :
<ul>
  
<li>a. “OTORITAS JASA KEUANGAN TIDAK MEMBERIKANPERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”</li>

<li>b. “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.”; dan </li>

<li>c. “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.”.</li>
</ul>
</p>
<p id='copyright'>Copyright Udana.id © 2020 by All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
