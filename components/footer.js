


function footer(){
    return /*HTML*/`
    <footer>
        <div class="footer-logo">
            <img src="assets/logo/activity_logg_logo.png" alt="activity_logg_logo">
        </div>

        <div>
          <ul>
            <li>
              <img src="assets/icons/phone-icon.svg" alt="phone-icon" />
            </li>
            <li>
              <p class="font-size-small">+47 345 67 890</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="assets/icons/mail-icon.svg" alt="email-icon" />
            </li>
            <li>
              <p class="font-size-small">support@activitylog.com</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="assets/icons/location-icon.svg" alt="map-icon" />
            </li>
            <li>
              <address>
                <p class="font-size-small">Storgata 12</p>
                <p class="font-size-small">1010 Oslo</p>
                <p class="font-size-small">Norge</p>
              </address>
            </li>
          </ul>
        </div>

        <div class="flex-column center">
            <h2 class="medium-title">Follow us</h2>
            <div class="flex-row gap-20">
                <img src="assets/icons/facebook-icon.svg" alt="facebook-icon" />
                <img src="assets/icons/x-icon.svg" alt="x-icon" />
                <img src="assets/icons/instagram-icon.svg" alt="instagram-icon" />
            </div>
        </div>

         <p class="grid-area-footerBottom font-size-smaller letter-spacing-2px">
            2024 © ActivityLog™ All rights reserved.
        </p>
    </footer>
    `;
}