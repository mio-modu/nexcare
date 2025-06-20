class About {
    constructor() {
        this.section = document.createElement('section');
        this.section.id = 'about';
        this.section.className = 'py-20 bg-white';
        this.init();
    }

    init() {
        this.section.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold text-primary mb-8">Who We Are</h2>
                    <p class="text-lg text-gray-600 mb-12">
                        NexSecure is a next-generation AI cybersecurity company that protects enterprises and institutions with proactive defense and predictive intelligence.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <h3 class="text-2xl font-semibold text-primary">Our Mission</h3>
                            <p class="text-gray-600">
                                To provide cutting-edge cybersecurity solutions that protect businesses from evolving digital threats.
                            </p>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-2xl font-semibold text-primary">Our Vision</h3>
                            <p class="text-gray-600">
                                To be the global leader in AI-powered cybersecurity solutions.
                            </p>
                        </div>
                    </div>
                    <div class="mt-12 w-full h-96 bg-gray-100 rounded-lg">
                        <!-- Team/Office Image Here -->
                    </div>
                </div>
            </div>
        `;
    }

    getElement() {
        return this.section;
    }
}

export default About; 