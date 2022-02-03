import fakerStatic from "@withshepherd/faker";

export const getUserProfile = () => {

    return {
        fullName: fakerStatic.name.findName(),
        email: fakerStatic.internet.email(),
        phone: fakerStatic.phone.phoneNumber(),
    };
}
