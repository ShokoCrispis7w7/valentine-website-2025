// ============================================
//  CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Querida Daira",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Te gustaria ser mi San Valentin?",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💖', '💖', '💖'],  // Heart emojis
        bears: ['✨', '✨']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Querida Daira, te gustaria salir conmigo?  ",                                    // First interaction
            yesBtn: "Si",                                             // Text for "Yes" button
            noBtn: "No 💔",                                               // Text for "No" button
            secretAnswer: "No... lo dudes❤️"           // Secret hover message
        },
        second: {
            text: "Del 1 al 10000%",                          // For the love meter
            startText: "Cuanto te gustaria?🤏",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Te gustaria ser mi San Valentin? 🌹", // The big question!
            yesBtn: "Siii",                                             // Text for "Yes" button
            noBtn: "No, fokiu"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Es que tu naturalidad es tan dulce como un caramelo por la mañana y tan suave como un buen vino💝",  // Shows when they go past 5000%
        high: "Si la música fuese un vicio, la melodía de tu voz seria mi droga más adictiva💝",              // Shows when they go past 1000%
        normal: "Conocerte entre tanta gente es nada mas que obra de Dios"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Con mucho cariño,",
        message: "Espero verte pronto",
        emojis: "Juan j"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#e55050",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "25s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "30px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "1.0s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 0.8         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dimyef3if/raw/upload/v1771049939/sgNkCrAhTGc_e6ebty", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
