var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
        case "testprep":
            return `${name} is sub-admin with access to create and delete courses`;
        case "user":
            return `${name} is a user to consume content`;
        default:
            return `${name} is a trail user`;
    }
}

console.log(getUserRole("jinal","user"));