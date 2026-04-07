// =========================================================
// API CLIENT (MOCKED FOR FRONTEND TESTING)
// =========================================================

const API_BASE = 'http://localhost:3000/api';

export const apiClient = {
    // 1. GET LIST
    async getAllBeans() {
        const res = await fetch(`${API_BASE}/beans`);
        const response =  await res.json();

        if(response.type === 'success'){
            return response.data
        } else {
           return [];
        }
    },

    // 2. GET DETAILS
    async getBeanById(id) {
        const res = await fetch(`${API_BASE}/beans/${id}`);
        const response =  await res.json();

        if(response.type === 'success'){
            return response.data
        } else {
           return {};
        }
    },

    // 3. CREATE
    async createBean(beanData) {
        console.log('API: Creating bean...', beanData);
        mockBeans.push({ ...beanData, id: String(Date.now()), recipes: [] });
    },

    // 4. UPDATE
    async updateBean(id, beanData) {
        console.log(`API: Updating bean ${id}...`, beanData);
        // Mock update logic needed for full test, but console log is enough for now
    },

    // 5. DELETE
    async deleteBean(id) {
        console.log(`API: Deleting bean ${id}`);
        const index = mockBeans.findIndex(b => b.id === id);
        if (index > -1) mockBeans.splice(index, 1);
    },

    // 6. LOCALIZATION
    async getTranslations(lang) {
        const res = await fetch(`${API_BASE}/i18n/${lang}`);
        const response =  await res.json();

        if(response.type === 'success'){
            return response.data
        } else {
           return {};
        }
    }
};