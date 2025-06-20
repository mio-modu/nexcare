class Hero {
    constructor() {
        this.section = document.createElement('section');
        this.section.id = 'hero';
        this.section.className = 'min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 relative';
        this.init();
    }

    init() {
        this.section.innerHTML = `
            <div class="absolute inset-0 bg-black opacity-20">
                <!-- Hero Image Here -->
            </div>
            <div class="container mx-auto px-4 relative z-10 text-center">
                <h1 class="text-6xl font-bold text-primary mb-4">NexSecure</h1>
                <h2 class="text-2xl text-secondary mb-6">Beyond Security. Into the Future.</h2>
                <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    AI-powered cybersecurity that protects your digital assets with real-time precision.
                </p>
                <button class="btn-primary">Request a Demo</button>
            </div>
        `;
    }

    getElement() {
        return this.section;
    }
}

export default Hero; 