class Header {
    constructor() {
        this.header = document.createElement('header');
        this.header.className = 'fixed w-full z-50 transition-all duration-300';
        this.init();
    }

    init() {
        this.header.innerHTML = `
            <nav class="w-full px-4 py-4">
                <div class="flex justify-between items-center w-full">
                    <a href="#" class="text-xl md:text-2xl lg:text-3xl font-bold text-primary flex-shrink-0">NexSecure</a>
                    <div class="hidden md:flex space-x-6 lg:space-x-8">
                        <a href="#about" class="text-gray-600 hover:text-primary text-sm md:text-base lg:text-lg">About</a>
                        <a href="#services" class="text-gray-600 hover:text-primary text-sm md:text-base lg:text-lg">Services</a>
                        <a href="#achievements" class="text-gray-600 hover:text-primary text-sm md:text-base lg:text-lg">Achievements</a>
                        <a href="#contact" class="text-gray-600 hover:text-primary text-sm md:text-base lg:text-lg">Contact</a>
                    </div>
                    <button class="md:hidden menu-button ml-2">
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