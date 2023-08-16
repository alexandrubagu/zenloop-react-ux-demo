import users from '../seeds/users';
import properties from '../seeds/properties';
import roles from '../seeds/roles';
import survey_groups from '../seeds/survey_groups';

export default {
    getUser: (userId) => {
        return users.find((user) => user.key === userId);
    },
    getUserProperties: (property_ids) => {
        return properties.filter((property) => property_ids.includes(property.key));
    },
    getUserRoles: (role_ids) => {
        return roles.filter((role) => role_ids.includes(role.key));
    },
    getSurveyGroup: (surveyGroupId) => {
        return survey_groups.find((survey_group) => survey_group.key === surveyGroupId);
    },
    getRole: (roleId) => {
        return roles.find((role) => role.key === roleId);
    },
    getProperty: (propertyId) => {
        return properties.find((property) => property.key === propertyId);
    },
    getUsersByProperty: (propertyId) => {
        return users.filter((user) => user.property_ids.includes(propertyId));
    },
    getUsersbyRole: (roleId) => {
        return users.filter((user) => user.role_ids.includes(roleId));
    },
    countUsersbyRole: (roleId) => {
        return users.filter((user) => user.role_ids.includes(roleId)).length;
    }
}