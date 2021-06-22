
//serve per poter importare i file json con tranquilità dapertutto
declare module "*.json" {
    const value: any;
    export default value;
}