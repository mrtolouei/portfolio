export const formatCommand = (name: string, desc: string, pad: number = 20) => {
    const spaces = ' '.repeat(Math.max(1, pad - name.length))
    return `<span class="text-white">- ${name}${spaces}</span><span class="text-gray-400 italic">${desc}</span>`
}