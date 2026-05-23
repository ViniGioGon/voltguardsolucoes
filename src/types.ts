/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjetctSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: "Industrial" | "Comercial" | "Residencial" | "Laudos";
  description: string;
  image: string;
  longDescription: string;
  specs: ProjetctSpec[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string; // lucide-react icon key
  image: string;
  normas: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
