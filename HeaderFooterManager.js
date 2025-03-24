class SpeciealHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <h1>Not on Print.com</h1> 
        <div class="headermenu">
            <div class="headerbutton">
            <button class="dropbtn" onclick="window.location.href = '/Not-on-Print/index.html';">⌂</button>
            </div> 
            
            <div class="dropdown">
            <button class="dropbtn" onclick="window.location.href = '/Not-on-Print/text.html';">Text</button>
                <div class="dropdown-content">
                    <a href="/Not-on-Print/Text/TheReadStream.html">The Red Stream</a>
                    <a href="/Not-on-Print/Text/Shortstories.html">Shortstories</a>
                    <a href="/Not-on-Print/Text/Diary.html">Diary</a>
                    <a href="/Not-on-Print/Text/Reviews.html">Reviews</a>
                </div>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/Not-on-Print/Audio.html';">Audio</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/Not-on-Print/About.html';">About</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/Not-on-Print/cummingsoon.html';">Coming Soon</button>
                </div> 

            <div class="dropdown">
                <button class="dropbtn" onclick="window.location.href = '/Not-on-Print/linktree.html';">Links</button>
                <div class="dropdown-content">
                    <a href="https://www.instagram.com/notonprintdotcom?utm_source=qr&igsh=dmh1dXFlYnYzdDFt">Insta</a>
                    <!-- <a href="Shortstories.html">Spotify</a> -->
                    <a href="https://letterboxd.com/kalovedessa/">Letterboxd</a>
                </div>
            </div>

        </div>
        </header>
        `
    }
}

customElements.define(`special-header`, SpeciealHeader)
