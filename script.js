document.getElementById('violationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    // Prepare data for export
    const data = {
        letterDate: formData.get('letterDate'),
        ownerNames: formData.get('ownerNames'),
        ownerAddress: formData.get('ownerAddress'),
        ownerCityStateZIP: formData.get('ownerCityStateZIP'),
        violationAddress: formData.get('violationAddress'),
        violationCityStateZIP: formData.get('violationCityStateZIP'),
        taxID: formData.get('taxID'),
        violationDate: formData.get('violationDate'),
        selectedViolations: Array.from(formData.keys()).filter(key => formData.get(key) === 'on')
    };

    // Send data to server for processing (or use client-side libraries to generate Word document)
});
