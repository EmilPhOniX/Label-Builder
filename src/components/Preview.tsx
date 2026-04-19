import Label from "./Label"

// TODO Crée une préview de la page A4 avec les éléments ajoutés

export default function Preview() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="preview-root">
            <div className="mb-4 no-print">
                <button
                    type="button"
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={handlePrint}
                >
                    Imprimer la preview
                </button>
            </div>

            <div className="print-wrapper">
                <div className="preview-sheet bg-red-50">
                    <table className="fiche w-full h-full border-collapse" style={{ minHeight: '100%' }}>
                        <tbody>
                            {Array.from({ length: 8 }, (_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: 3 }, (_, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="p-1 align-top"
                                            style={{ width: '33.333%', height: '12.5%' }}
                                        >
                                            <Label />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
