function generateSentences() {
	event.preventDefault();
	
  let diseaseName = document.getElementById("disease-name").value;
  
  let positiveSentences = [
    `Patient has been diagnosed with ${diseaseName} on 1/20/2020.`,
    `The diagnosis of ${diseaseName} was confirmed.`,
    `Patient has ${diseaseName}.`,
    `Tests were positive for ${diseaseName}.`,
    `Patient was diagnosed with ${diseaseName} earlier this week.`
  ];
  
  let negativeSentences = [
    `The diagnosis of ${diseaseName} was not confirmed.`,
    `Patient does not have ${diseaseName}.`,
    `Tests were negative for ${diseaseName}.`,
    `Patient's symptoms are not consistent with ${diseaseName}.`,
    `No history of ${diseaseName}.`
  ];
  
  let suspectedSentences = [
    `Patient has suspected ${diseaseName}.`,
    `Patient is here today for suspicion of ${diseaseName}.`,
    `Note: Suspicion for ${diseaseName} in patient.`,
    `Tests were inconclusive but ${diseaseName} is suspected.`,
    `I suspect the diagnosis of ${diseaseName}.`
  ];
  
  let recurrentSentences = [
    `Recurrent ${diseaseName} is present.`,
    `Patient is experiencing a relapse of ${diseaseName}.`,
    `Patient has a history of ${diseaseName} recurrence.`,
    `After a period of remission, patient is experiencing a recurrence of ${diseaseName}.`,
    `Patient has experienced multiple recurrences of ${diseaseName}.`
  ];

  let positiveResult = document.getElementById("positive-case-result");
  let negativeResult = document.getElementById("negative-case-result");
  let suspectedResult = document.getElementById("suspected-result");
  let recurrentResult = document.getElementById("recurrent-result");

  let randomIndex = Math.floor(Math.random() * positiveSentences.length);
  positiveResult.innerHTML = positiveSentences[randomIndex];
  
  randomIndex = Math.floor(Math.random() * negativeSentences.length);
  negativeResult.innerHTML = negativeSentences[randomIndex];
  
  randomIndex = Math.floor(Math.random() * suspectedSentences.length);
  suspectedResult.innerHTML = suspectedSentences[randomIndex];
  
  randomIndex = Math.floor(Math.random() * recurrentSentences.length);
  recurrentResult.innerHTML = recurrentSentences[randomIndex];
}
