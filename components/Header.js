class Header {
    constructor() {
        this.header = document.createElement('header');
        this.header.className = 'fixed w-full z-50 transition-all duration-300';
        this.init();
    }

    init() {
        this.header.innerHTML = `
            <nav class="container mx-auto px-4 py-4">
                <div class="flex justify-between items-center">
                    <a href="#" class="text-2xl font-bold text-primary">NexSecure</a>
                    <div class="hidden md:flex space-x-8">
                        <a href="#about" class="text-gray-600 hover:text-primary">About</a>
                        <a href="#services" class="text-gray-600 hover:text-primary">Services</a>
                        <a href="#achievements" class="text-gray-600 hover:text-primary">Achievements</a>
                        <a href="#contact" class="text-gray-600 hover:text-primary">Contact</a>
                    </div>
                    <button class="md:hidden menu-button">
                        <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                        <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                        <span class="block w-6 h-0.5 bg-gray-600"></span>
                    </button>
                </div>
            </nav>
        `;
    }

    getElement() {
        return this.header;
    }
}

export default Header; 