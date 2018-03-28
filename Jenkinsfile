#!groovy

def notifySlack = { String color, String message ->
  slackSend(color: color, message: "${message}: Job ${env.JOB_NAME} [${env.BUILD_Number}] (${env.BUILD_URL})")
}

node {
  checkout scm

  ansiColor('xterm') {
    try {
      notifySlack('#FFC107', 'STARTED')

      stage('Build') {
        sh 'npm install'
      }

      stage ('Test') {
        sh 'npm test -- -cc'
      }

      stage ('Generating report') {
          cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'coverage/cobertura-coverage.xml', conditionalCoverageTargets: '80, 60, 0', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '80, 60, 0', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 60, 0', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false
      }

      notifySlack('#4CAF50', 'SUCCESSFUL')
    } catch (e) {
      currentBuild.result = "FAILED"
      notifySlack('#F44336', 'FAILED')
      throw e
    }
  }
}
