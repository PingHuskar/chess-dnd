export default function unique(arr: any[]): any[] {
    return new Array(...new Set(arr));
}