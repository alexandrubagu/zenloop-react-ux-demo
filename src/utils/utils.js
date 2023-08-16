import users from '../seeds/users';
import properties from '../seeds/properties';

export default {
    getUser: (userId) => {
        return users.find((user) => user.key === userId);
    },
    getUserProperties: (property_ids) => {
        return properties.filter((property) => property_ids.includes(property.key));
    }
}