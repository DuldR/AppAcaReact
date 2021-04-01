const StepsAPIUtil = {

    fetchSteps: () => (
        $.ajax({
            method: 'GET',
            url: '/api/steps'
        })
    ),

    createStep: (step) => (
        $.ajax({

            method: 'POST',
            url: `api/steps`,
            data: step

        })
    ),

    updateStep: (step) => (
        $.ajax({
            method: "PATCH",
            url: `api/steps/${step.id}`,
            data: { step }
        })
    ),

    deleteStep: (step) => (
        $.ajax({
            method: "DELETE",
            url: `api/steps/${step.id}`,
            data: step
        })
    )


}

module.exports = StepsAPIUtil