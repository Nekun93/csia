
                    const c1 = document.getElementById('myChart1')
                    new Chart(c1, {
                        type: 'doughnut',
                      data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
              }]
                      },
                     options: {
              scales: {
              y: {
              beginAtZero: true
              }
              }
              }
              })

 
                    const c2 = document.getElementById('myChart2')
                    new Chart(c2, {
                        type: 'pie',
                      data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
              }]
                      },
                     options: {
              scales: {
              y: {
              beginAtZero: true
              }
              }
              }
              })


    const c3 = document.getElementById('myChart3')
    new Chart(c3, {
        type: 'bar',
      data: {
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
borderWidth: 1
}]
      },
     options: {
scales: {
y: {
beginAtZero: true
}
}
}
})
    const c4 = document.getElementById('myChart4')
    new Chart(c4, {
        type: 'bar',
      data: {
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
borderWidth: 1
}]
      },
     options: {
scales: {
y: {
beginAtZero: true
}
}
}
})

    const c5 = document.getElementById('myChart5')
    new Chart(c5, {
        type: 'bar',
      data: {
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
borderWidth: 1
}]
      },
     options: {
        indexAxis: 'y',
scales: {
y: {
beginAtZero: true
}
}
}
})



