
//serve per poter importare i file json con tranquilitÃ  dapertutto
declare module "*.json" {
    const value: any;
    export default value;
}