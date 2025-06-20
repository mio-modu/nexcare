class Services {
    constructor() {
        this.section = document.createElement('section');
        this.section.id = 'services';
        this.section.className = 'py-20 bg-gray-50';
        this.services = [
            {
                title: 'Real-Time Threat Detection',
                description: 'Monitor and neutralize threats in real time with intelligent IDS.',
                icon: 'shield-check'
            },
            {
                title: 'Smart Access Control',
                description: 'Manage authentication with behavioral AI and multi-layer security.',
                icon: 'key'
            },
            {
                title: 'Cloud Data Protection',
                description: 'Automated encrypted backups and recovery over multi-cloud.',
                icon: 'cloud'
            },
            {
                title: 'Anomaly Behavior Analytics',
                description: 'Identify unusual behavior patterns before breaches happen.',
                icon: 'chart-bar'
            }
        ];
        this.init();
    }

    init() {
        this.section.innerHTML = `
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-primary text-center mb-16">Our Solutions</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${this.services.map(service => `
                        <div class="service-card bg-white p-6 rounded-xl shadow-sm">
                            <div class="w-16 h-16 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                                <i class="fas fa-${service.icon} text-2xl text-primary"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-primary mb-3">${service.title}</h3>
                            <p class="text-gray-600">${service.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getElement() {
        return this.section;
    }
}

export default Services; 