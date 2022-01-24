import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  filterTerm: string;

  constructor(private router: Router) {}

  filterData = []; //Store filtered data

  regularList = [
    {
      name: 'Asthma Attack',
      id: 62,
      source: 'Asthma Attack Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Frost Bite',
      id: 61,
      source: 'Frost Bite Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Heat Exhaustion',
      id: 60,
      source:
        'Heat Exhaustion Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Fainting',
      id: 59,
      source: 'Fainting Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Seizure',
      id: 58,
      source: 'Seizure Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Stroke',
      id: 57,
      source: 'Stroke Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Severe Allergy',
      id: 56,
      source:
        'Severe Allergy Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Nosebleed',
      id: 46,
      source: 'Nosebleed Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Burn',
      id: 47,
      source: 'Burn Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Stings, Bites and Poisonous Plants',
      id: 48,
      source:
        'Stings, Bites and Poisonous Plants Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Drinking Water Safety',
      id: 49,
      source:
        'Drinking Water Safety Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Dehydration and Oral Rehydration',
      id: 50,
      source:
        'Dehydration and Oral Rehydration Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Drowning',
      id: 51,
      source: 'Drowning Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'CPR - Adult and Child',
      id: 52,
      source:
        'CPR - Adult and Child Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Pregnancy and Delivery',
      id: 53,
      source:
        'Pregnancy and Delivery Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Trauma',
      id: 54,
      source: 'Trauma Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Choking',
      id: 55,
      source: 'Choking Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Abdominal Pain (Stomach Pain), Long-term',
      id: 0,
      source:
        'Abdominal Pain (Stomach Pain) Long-term Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Abdominal Pain (Stomach Pain), Short-term',
      id: 1,
      source:
        'Abdominal Pain (Stomach Pain) Short-term Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Ankle Problems',
      id: 2,
      source:
        'Ankle Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Breast Problems in Men',
      id: 3,
      source:
        'Breast Problems in Men Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Breast Problems in Women',
      id: 4,
      source:
        'Breast Problems in Women Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Chest Pain in Infants and Children',
      id: 5,
      source:
        'Chest Pain in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Chest Pain, Acute',
      id: 6,
      source:
        'Chest Pain Acute Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Chest Pain, Chronic',
      id: 7,
      source:
        'Chest Pain Chronic Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Cold and Flu',
      id: 8,
      source: 'Cold and Flu Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Cough',
      id: 9,
      source: 'Cough Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Diarrhea',
      id: 10,
      source: 'Diarrhea Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Ear Problems',
      id: 11,
      source: 'Ear Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Elimination Problems',
      id: 12,
      source:
        'Elimination Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Elimination Problems in Infants and Children',
      id: 13,
      source:
        'Elimination Problems in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Eye Problems',
      id: 14,
      source: 'Eye Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Facial Swelling',
      id: 15,
      source:
        'Facial Swelling Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Feeding Problems in Infants and Children',
      id: 16,
      source:
        'Feeding Problems in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Fever',
      id: 17,
      source: 'Fever Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Fever in Infants and Children',
      id: 18,
      source:
        'Fever in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Foot Problems',
      id: 19,
      source: 'Foot Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Genital Problems in Infants (Female)',
      id: 20,
      source:
        'Genital Problems in Infants (Female) Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Genital Problems in Infants (Male)',
      id: 21,
      source:
        'Genital Problems in Infants (Male) Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Genital Problems in Men',
      id: 22,
      source:
        'Genital Problems in Men Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Genital Problems in Women',
      id: 23,
      source:
        'Genital Problems in Women Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Hair Loss',
      id: 24,
      source: 'Hair Loss Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Hand, Wrist, Arm Problems',
      id: 25,
      source:
        'Hand Wrist Arm Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Headaches',
      id: 26,
      source: 'Headaches Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Hearing Problems',
      id: 27,
      source:
        'Hearing Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Hip Problems',
      id: 28,
      source: 'Hip Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Knee Problems',
      id: 29,
      source: 'Knee Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Leg Problems',
      id: 30,
      source: 'Leg Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Lower Back Pain',
      id: 31,
      source:
        'Lower Back Pain Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Menstrual Cycle Problems',
      id: 32,
      source:
        'Menstrual Cycle Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Mouth Problems',
      id: 33,
      source:
        'Mouth Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Mouth Problems in Infants and Children',
      id: 34,
      source:
        'Mouth Problems in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Nausea and Vomiting',
      id: 35,
      source:
        'Nausea and Vomiting Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Nausea and Vomiting in Infants and Children',
      id: 36,
      source:
        'Nausea and Vomiting in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Neck Pain',
      id: 37,
      source: 'Neck Pain Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Neck Swelling',
      id: 38,
      source: 'Neck Swelling Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Shortness of Breath',
      id: 39,
      source:
        'Shortness of Breath Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Shortness of Breath in Infants and Children',
      id: 40,
      source:
        'Shortness of Breath in Infants and Children Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Shoulder Problems',
      id: 41,
      source:
        'Shoulder Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Rashes and Other Skin Problems',
      id: 42,
      source:
        'Rashes and Other Skin Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Throat Problems',
      id: 43,
      source:
        'Throat Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Tooth Problems',
      id: 44,
      source:
        'Tooth Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
    {
      name: 'Urination Problems',
      id: 45,
      source:
        'Urination Problems Diagnostic Flowchart. AMA Fam Medical Guide.2004.',
    },
  ];

  filter(val) {
    this.filterData = this.regularList.filter((item) => {
      return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

  cancel() {
    this.filterData = [];
  }

  showDetail(id) {
    localStorage.setItem('topic_id', JSON.stringify(id));
    this.router.navigate(['/detail']);
  }
}
