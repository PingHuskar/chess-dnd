export default function unique(arr: string[]): string[] {
    return new Array(...new Set(arr));
}