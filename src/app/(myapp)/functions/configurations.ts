function getOpeningHours() {
    return [
        { value: '08:00 - 18:00', label: '08:00 - 18:00' },
        { value: '09:00 - 19:00', label: '09:00 - 19:00' },
        { value: '10:00 - 20:00', label: '10:00 - 20:00' },
        { value: '11:00 - 21:00', label: '11:00 - 21:00' },
        { value: '12:00 - 22:00', label: '12:00 - 22:00' }
    ];
}

function getLicenseStatus() {
    return [
        { value: 'A', label: 'Ativa' },
    ];
}

function getEstablishmentStatus() {
    return [
        { value: 'Ativo', label: 'Ativo' },
        { value: 'Inativo', label: 'Inativo' },
        { value: 'Suspenso', label: 'Suspenso' },
        { value: 'Cancelado', label: 'Cancelado' },
        { value: 'Pendente', label: 'Pendente' },
    ]
}

export { getOpeningHours, getLicenseStatus, getEstablishmentStatus }