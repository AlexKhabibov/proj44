import { useAuthStore } from "../../store/useAuthStore";

function CartLogic() {

    const { user, usersData } = useAuthStore();
    const cart = user ? usersData[user.email]?.cart || [] : [];

    return (
        { cart }
    );
}

export default CartLogic;