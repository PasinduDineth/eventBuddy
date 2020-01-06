export const setSession = (item) => {
    console.log("ITEM", item);
    return {
        type: "add",
        item
    }
}