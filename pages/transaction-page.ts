import { Page, Locator } from '@playwright/test';


export class TransactionPage {
  readonly page: Page;
  readonly description: Locator;
  readonly source: Locator;
  readonly Saction: Locator
  readonly destination: Locator;
  readonly date: Locator;
  readonly amount: Locator;
  readonly foreignamount: Locator;
  readonly buget: Locator;
  readonly category: Locator;
  readonly piggyBank: Locator;
  readonly tags: Locator;
  readonly subscription: Locator;
  readonly interestDate: Locator;
  readonly attachments: Locator;
  readonly notes: Locator;
  readonly submit: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.description = page.locator('input[name="description[]"]');
    this.source = page.locator('input[name="source[]"]');
    this.Saction = page.locator('.dropdown');
    this.destination = page.locator('input[name="destination[]"]');
    this.date = page.locator('input[name="date[]"]');
    this.amount = page.locator('input[name="amount[]"]');
    this.foreignamount = page.locator('input[name="foreign_amount[]"]');
    this.buget = page.locator('select[name="budget[]"]');
    this.category = page.locator('input[name="category[]"]');
    this.piggyBank = page.locator('select[name="piggy_bank[]"]');
    this.tags = page.locator('input[title="Tags"]');
    this.subscription = page.locator('select[name="bill[]"]');
    this.interestDate = page.locator('input[name="interest_date[]"]');
    this.attachments = page.locator('input[name="attachments[]"]');
    this.notes = page.locator('textarea[name="notes[]"]');
    this.submit = page.locator('.btn-success');
  }

  async gotocreateExpenses() {
    await this.page.goto('/transactions/create/withdrawal');
  }

async gotocreateDeposit() {
  await this.page.goto('/transactions/create/deposit')
}

async gotocreateTransfer() {
  await this.page.goto('/transactions/create/transfer')
}
async gotowithdrawlList() {
  await this.page.goto('/transactions/withdrawal')
}

  async createTrsansaction(description: string, sourceAccount: string, destinationAccount: string, ammount: string, buget: string, category: string, tag: string, interestdate: string, notes: string) {
  await this.description.fill(description);
  await this.source.fill(sourceAccount);
  await this.Saction.getByText(sourceAccount).click();
  await this.destination.fill(destinationAccount);
  await this.destination.click();
  await this.Saction.getByRole('button', { name: destinationAccount}).click();
  await this.amount.fill(ammount);
  await this.foreignamount.fill(ammount);
  await this.buget.selectOption({ label: buget });
  await this.category.fill(category)
  await this.Saction.getByRole('button', { name: category, exact: true}).click();
  await this.piggyBank.selectOption('3');
  await this.subscription.selectOption('9');
  await this.tags.fill(tag);
  await this.interestDate.fill(interestdate);
  await this.attachments.setInputFiles('test-data/image.png');
  await this.notes.fill(notes);
  await this.submit.click();
  }

    async createTrsansactionSimple(description: string, sourceAccount: string, destinationAccount: string, ammount: string) {
  await this.description.fill(description);
  await this.source.fill(sourceAccount);
  await this.Saction.getByText(sourceAccount).click();
  await this.destination.fill(destinationAccount);
  await this.destination.click();
  await this.Saction.getByRole('button', { name: destinationAccount}).click();
  await this.amount.fill(ammount);
  await this.foreignamount.fill(ammount);
  await this.submit.click();
  }


    async createTrsansactionSubscription(description: string, sourceAccount: string, destinationAccount: string, ammount: string, buget: string, category: string, tag: string, subscription: string, interestdate: string, notes: string) {
  await this.description.fill(description);
  await this.source.fill(sourceAccount);
  await this.Saction.getByText(sourceAccount).click();
  await this.destination.fill(destinationAccount);
  await this.destination.click();
  await this.Saction.getByRole('button', { name: destinationAccount}).click();
  await this.amount.fill(ammount);
  await this.foreignamount.fill(ammount);
  await this.buget.selectOption({ label: buget });
  await this.category.fill(category)
  await this.Saction.getByRole('button', { name: category, exact: true}).click();
  await this.piggyBank.selectOption('3');
  await this.tags.fill(tag);
  await this.subscription.selectOption({ label: subscription })
  await this.interestDate.fill(interestdate);
  await this.attachments.setInputFiles('test-data/image.png');
  await this.notes.fill(notes);
  await this.submit.click();
  }
  
}